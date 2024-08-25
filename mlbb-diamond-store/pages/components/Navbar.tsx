import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>
        <Link href="/"><a className="mr-4">{t('welcome')}</a></Link>
        <Link href="/order"><a className="mr-4">{t('order_now')}</a></Link>
        <Link href="/notice"><a>{t('notices')}</a></Link>
      </div>
      <div className="flex items-center">
        <Link href="/profile"><a className="mr-4">{t('profile')}</a></Link>
        <Link href="/login"><a className="mr-4">{t('login')}</a></Link>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
