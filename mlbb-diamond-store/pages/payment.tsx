import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Payment() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle payment processing
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-bold">{t('enter_payment')}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label>{t('payment_method')}</label>
            <select {...register('paymentMethod')} className="block w-full p-2 border">
              <option value="paypal">PayPal</option>
              <option value="credit_card">Credit Card</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2">{t('pay_now')}</button>
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
