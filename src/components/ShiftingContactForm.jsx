'use client';

import { useState } from 'react';
import { useFormAndValidation } from '@/app/hooks/useFormAndValidation';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const ShiftingContactForm = () => {
  const [selected, setSelected] = useState('individual');
  const router = useRouter();

  const {
    values,
    handleChange,
    resetForm,
    isValid,
    errors,
  } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      alert("Invalid data");
      return;
    }

    const formData = {
      name: values.name,
      companyName: values.companyName,
      info: values.info,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          router.push('/thank-you');  // Redirect to the thank-you page
          resetForm();
        } else {
          return response.json().then(errorData => {
            alert(`Error submitting form: ${errorData.message}`);
          });
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('Error submitting form.');
      });
  };

  return (
    <section className="bg-rounded p-2">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse overflow-hidden rounded-lg shadow-lg lg:flex-row">
        <Form
          selected={selected}
          setSelected={setSelected}
          handleSubmit={handleSubmit}
          values={values}
          handleChange={handleChange}
          resetForm={resetForm}
          isValid={isValid}
          errors={errors}
        />
        <Images selected={selected} />
      </div>
    </section>
  );
};

const Form = ({
  selected,
  setSelected,
  handleSubmit,
  values,
  handleChange,
  resetForm,
  isValid,
  errors,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full p-8 text-zinc-950 transition-colors duration-[750ms] dark:text-white ${
        selected === 'company' ? 'dark:bg-zinc-800' : 'dark:bg-zinc-800'
      }`}
    >
      <h3 className="mb-6 text-3xl font-bold">Contact Me</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="mb-2 text-xl">Hi 👋! My name is...</p>
        <input
          type="text"
          name="name"
          required
          value={values.name || ''}
          onChange={handleChange}
          placeholder="Your name..."
          className={`${
            selected === 'company' ? 'bg-blue-600' : 'bg-violet-700'
          } w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0`}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6">
        <p className="mb-2 text-xl">and I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === 'company' && (
          <motion.div
            initial={{
              marginTop: -100,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -100,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="mb-2 text-xl">by the name of...</p>
            <input
              type="text"
              name="companyName"
              value={values.companyName || ''}
              onChange={handleChange}
              placeholder="Your company name..."
              className={`${
                selected === 'company' ? 'bg-blue-600' : 'bg-violet-700'
              } w-full rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="mb-2 text-xl">I&apos;d love to ask about...</p>
        <textarea
          name="info"
          value={values.info || ''}
          required
          onChange={handleChange}
          placeholder="Whatever your heart desires :)"
          className={`${
            selected === 'company' ? 'bg-blue-600' : 'bg-violet-700'
          } min-h-[150px] w-full resize-none rounded-md p-2 placeholder-white/70 transition-colors duration-[750ms] focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`${
          selected === 'company'
            ? 'bg-white text-blue-600'
            : 'bg-white text-violet-600'
        } w-full rounded-lg py-3 text-center text-lg font-semibold transition-colors duration-[750ms]`}
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormSelect = ({ selected, setSelected }) => {
  const handleSelection = (event, selection) => {
    event.preventDefault();
    setSelected(selection);
  };

  return (
    <div className=" w-fit overflow-hidden font-medium">
      <button
        className={`${
          selected === 'individual'
            ? 'text-zinc-950 dark:text-violet-600'
            : 'text-zinc-400 dark:text-white'
        } relative px-3 py-1.5 text-sm transition-colors duration-[750ms]`}
        onClick={(e) => handleSelection(e, 'individual')}
      >
        <span className="relative z-10">An individual</span>
        {selected === 'individual' && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-white"
          />
        )}
      </button>
      <button
        className={`${
          selected === 'company'
            ? 'text-zinc-950 dark:text-indigo-600'
            : 'text-zinc-400 dark:text-white'
        } relative px-3 py-1.5 text-sm transition-colors duration-[750ms]`}
        onClick={(e) => handleSelection(e, 'company')}
      >
        <span className="relative z-10">A company</span>
        {selected === 'company' && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 z-0 bg-white"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }) => {
  return (
    <div className="relative min-h-[100px] w-full overflow-hidden bg-white">
      <motion.div
        initial={false}
        animate={{
          x: selected === 'individual' ? '0%' : '100%',
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === 'company' ? '0%' : '-100%',
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
};

export default ShiftingContactForm;

const BASE_TRANSITION = { ease: 'anticipate', duration: 0.75 };
