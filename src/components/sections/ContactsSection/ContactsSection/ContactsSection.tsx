'use client';

import { ContactMap } from '../components/ContactMap/ContactMap';
import { CorporateOffer } from '../components/CorporateOffer/CorporateOffer';
import { CreditForm } from '../components/CreditForm/CreditForm';
import cls from './ContactsSection.module.scss';

export const ContactSection = () => {
	return (
		<section className={cls.contactSection}>
			<CreditForm />
			<CorporateOffer />
			<ContactMap />
		</section>
	);
};
