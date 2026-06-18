'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Close } from '@/assets/icons';
import {
	FontWeight,
	Text,
	TextColor,
	TextSize,
	TextType,
	TitleTag,
} from '@/components/shared/ui/Text';
import cls from './CarGallery.module.scss';

interface CarGalleryProps {
	images: string[];
	title?: string;
}

export const CarGallery = ({ images, title }: CarGalleryProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Блокировка прокрутки body при открытом модальном окне
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isModalOpen]);

	// Закрытие по Escape
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isModalOpen) {
				setIsModalOpen(false);
			}
		};

		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, [isModalOpen]);

	const openModal = (index: number) => {
		setActiveIndex(index);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	const activeImage = images[activeIndex];

	// Если изображений нет или активное изображение не определено - не рендерим галерею
	if (!activeImage) {
		return null;
	}

	return (
		<>
			<div className={cls.gallery}>
				{title && (
					<Text
						type={TextType.TITLE}
						tag={TitleTag.H3}
						fontSize={TextSize.M}
						color={TextColor.WHITE}
						fontWeight={FontWeight.BOLD}
						className={cls.title}
					>
						{title}
					</Text>
				)}

				{/* Thumbnails */}
				<div className={cls.thumbnails}>
					{images.map((img, index) => (
						<button
							key={index}
							className={`${cls.thumbnail} ${index === activeIndex ? cls.active : ''}`}
							onClick={() => openModal(index)}
							aria-label={`Показать фото ${index + 1}`}
						>
							<Image
								src={img}
								alt=''
								fill
								className={cls.thumbImage}
								sizes='(max-width: 768px) 33vw, 20vw'
							/>
						</button>
					))}
				</div>
			</div>

			{isModalOpen && (
				<div className={cls.modal} onClick={handleOverlayClick}>
					<button className={cls.closeButton} onClick={closeModal} aria-label='Закрыть'>
						<Close className={cls.closeIcon} />
					</button>
					<div className={cls.modalContent}>
						<div className={cls.mainImageWrapper}>
							<Image
								src={activeImage}
								alt={`Фото ${activeIndex + 1}`}
								fill
								className={cls.mainImage}
								sizes='100vw'
								priority
							/>
						</div>

						<div className={cls.modalThumbnails}>
							{images.map((img, index) => (
								<button
									key={index}
									className={`${cls.modalThumbnail} ${index === activeIndex ? cls.active : ''}`}
									onClick={() => setActiveIndex(index)}
									aria-label={`Показать фото ${index + 1}`}
								>
									<Image
										src={img}
										alt=''
										fill
										className={cls.modalThumbImage}
										sizes='(max-width: 768px) 25vw, 10vw'
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
