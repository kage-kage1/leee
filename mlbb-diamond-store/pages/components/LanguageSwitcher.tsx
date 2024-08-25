import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage('en')}
        className={`p-2 ${locale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('my')}
        className={`p-2 ${locale === 'my' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        MY
      </button>
    </div>
  );
}
