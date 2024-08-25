import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Login() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle login
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-bold">{t('login')}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label>Email</label>
            <input type="email" {...register('email')} className="block w-full p-2 border" required />
          </div>
          <div className="mb-4">
            <label>Password</label>
            <input type="password" {...register('password')} className="block w-full p-2 border" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2">{t('login')}</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
