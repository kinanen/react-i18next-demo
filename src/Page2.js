import { Link } from 'react-router-dom';
import { Trans, withTranslation, useTranslation } from 'react-i18next';

const Page2 = () => {
  const {t} = useTranslation();
  return (
    <div className='body'>
      <p>
        <Trans t={t}>this-is-page-2</Trans>
      </p>
      
      <p>
        <Trans i18nKey='go-to-home' t={t}>
         <Link to='/'></Link>
        </Trans>
      </p>
    </div>
  )
}

export default withTranslation()(Page2);
