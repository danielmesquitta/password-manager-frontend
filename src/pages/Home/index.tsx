import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { Edit, Eye, EyeOff, Trash } from 'react-feather';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { Input } from '~/components/Input';
import { Modal } from '~/components/Modal';
import useDebounce from '~/hooks/useDebounce';
import useFetch from '~/hooks/useFetch';
import { ErrorResponse } from '~/types/ErrorResponse';
import { PasswordCard } from '~/types/PasswordCard';
import { api } from '~/utils/api';
import { Form, HomeContainer, HomeContent, HomeHeader } from './styles';

const passwordFormValidationSchema = z.object({
  name: z.string().min(1),
  url: z.string().url().min(1),
  username: z.string().min(1),
  password: z.string().min(8),
});

type PasswordFormData = z.infer<typeof passwordFormValidationSchema>;

const Home = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
    setValue,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordFormValidationSchema),
  });

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeletionModalOpen, setIsDeletionModalOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [passwordCard, setPasswordCard] = useState<PasswordCard | null>(null);
  const debouncedSearch = useDebounce(search);

  const {
    data: passwordCards,
    isLoading,
    mutate,
  } = useFetch<{ data: PasswordCard[] }>(
    `/password-cards${debouncedSearch ? `?search=${debouncedSearch}` : ''}`,
  );

  const toggleFormModal = () => {
    setIsFormModalOpen((prevState) => !prevState);
  };

  const toggleDeletionModal = () => {
    setIsDeletionModalOpen((prevState) => !prevState);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleFormSubmit = handleSubmit((data: PasswordFormData) => {
    const isEditing = !!passwordCard;

    if (isEditing) {
      api
        .put(`/password-cards/${passwordCard.id}`, data)
        .then(() => {
          toggleFormModal();
          mutate();
          toast.success('User updated with success!');
          reset();
        })
        .catch((err: AxiosError<ErrorResponse>) => {
          toast.error(err.response?.data.message || err.message);
        });
    } else {
      api
        .post('/password-cards', data)
        .then(() => {
          toggleFormModal();
          mutate();
          toast.success('User created with success!');
          reset();
        })
        .catch((err: AxiosError<ErrorResponse>) => {
          toast.error(err.response?.data.message || err.message);
        });
    }
  });

  const handleDeletion = () => {
    api
      .delete(`/password-cards/${passwordCard?.id}`)
      .then(() => {
        toggleDeletionModal();
        mutate();
        toast.success('User deleted with success!');
      })
      .catch((err: AxiosError<ErrorResponse>) => {
        toast.error(err.response?.data.message || err.message);
      });
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleAddButtonClick = () => {
    toggleFormModal();
  };

  const handleEditButtonClick = (data: PasswordCard) => {
    toggleFormModal();
    setPasswordCard(data);
  };

  const handleDeleteButtonClick = (data: PasswordCard) => {
    toggleDeletionModal();
    setPasswordCard(data);
  };

  useEffect(() => {
    if (passwordCard) {
      setValue('name', passwordCard.name);
      setValue('password', passwordCard.password);
      setValue('url', passwordCard.url);
      setValue('username', passwordCard.username);
    }
  }, [passwordCard, setValue]);

  useEffect(() => {
    if (!isFormModalOpen) {
      reset();
      setPasswordCard(null);
    }
  }, [isFormModalOpen, reset]);

  useEffect(() => {
    if (!isDeletionModalOpen) {
      reset();
      setPasswordCard(null);
    }
  }, [isDeletionModalOpen, reset]);

  return (
    <HomeContainer>
      <HomeHeader>
        <h2>My passwords</h2>

        <div>
          <Input placeholder="Search" value={search} onChange={handleSearch} />

          <Button onClick={handleAddButtonClick}>Add</Button>
        </div>
      </HomeHeader>

      <HomeContent>
        {passwordCards?.data?.map((passwordCard) => (
          <Card
            key={passwordCard.id}
            title={passwordCard.name}
            description={passwordCard.url}
            primaryButton={{
              children: <Trash />,
              onClick: () => handleDeleteButtonClick(passwordCard),
            }}
            secondaryButton={{
              children: <Edit />,
              onClick: () => handleEditButtonClick(passwordCard),
            }}
          />
        ))}

        {isLoading && <p>Loading...</p>}
      </HomeContent>

      <Modal
        isOpen={isFormModalOpen}
        onClose={toggleFormModal}
        title="Edit"
        secondaryButton={{
          appearance: 'secondary',
          children: 'Cancel',
          onClick: toggleFormModal,
        }}
        primaryButton={{
          appearance: 'primary',
          children: 'Save',
          type: 'submit',
          onClick: handleFormSubmit,
        }}
      >
        <Form onSubmit={handleFormSubmit}>
          <Input
            label="Name"
            type="text"
            placeholder="A name for this password"
            error={errors.name && 'The name is required'}
            onClick={() => clearErrors('name')}
            {...register('name')}
          />

          <Input
            label="Url"
            type="text"
            placeholder="https://example.com"
            error={errors.url && 'Must be a valid url'}
            onClick={() => clearErrors('url')}
            {...register('url')}
          />

          <Input
            label="Username/E-mail"
            type="text"
            placeholder="Your username or e-mail"
            error={errors.username && 'The username is required'}
            onClick={() => clearErrors('username')}
            {...register('username')}
          />

          <Input
            label="Password"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Your password"
            error={
              errors.password &&
              'The password must be at least 8 characters in length'
            }
            onClick={() => clearErrors('password')}
            icon={{
              type: 'button',
              children: isPasswordVisible ? <Eye /> : <EyeOff />,
              onClick: togglePasswordVisibility,
            }}
            {...register('password')}
          />
        </Form>
      </Modal>

      <Modal
        isOpen={isDeletionModalOpen}
        onClose={toggleDeletionModal}
        title="Password deletion confirmation"
        secondaryButton={{
          appearance: 'secondary',
          children: 'Delete',
          onClick: handleDeletion,
        }}
        primaryButton={{
          appearance: 'primary',
          children: 'Cancel',
          type: 'submit',
          onClick: toggleDeletionModal,
        }}
      >
        <p>
          Are you sure you want to delete this password?
          <br />
          Once you delete, you will never be able to recover this password.
        </p>
      </Modal>
    </HomeContainer>
  );
};

export default Home;
