import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Notice() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-bold">{t('notices')}</h2>
        <p>No notices at this time.</p>
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
