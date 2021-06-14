import { IonButton, IonContent, IonIcon, IonPage, IonRow, IonSlides } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';
import { useRef, useState } from 'react';
import OnboardingSlide from '../components/OnboardingSlide';
import './Home.css';

const Home = () => {

	const sliderRef = useRef();
	const [ lastSlide, setLastSlide ] = useState(false);
	const [ firstSlide, setFirstSlide ] = useState(true);

	const slideContent = [
		{
			image: "/assets/applogo1.png",
			mainSlide: true,
			title: "Ionic Onboarding UI",
			text: "Share moments with your followers and experience memorable captures"
		},
		{
			image: "/assets/1sub.png",
			title: "Capture",
			text: "Capture that perfect moment in your life"
		},
		{
			image: "/assets/2sub.png",
			title: "Organize",
			text: "Organize photos exactly how you want them"
		},
		{
			image: "/assets/3sub.png",
			title: "Share",
			finalSlide: true,
			text: "Are you ready to share your special moments online with the world?"
		}
	];

	const checkSlides = async () => {

		const isLastSlide = await sliderRef.current.isEnd();
		const isFirstSlide = await sliderRef.current.isBeginning();
		setLastSlide(isLastSlide);
		setFirstSlide(isFirstSlide);
	}

	return (
		<IonPage>
			<IonContent fullscreen>

				<IonSlides onIonSlideWillChange={ checkSlides } pager={ true } ref={ sliderRef } id="slider" options={{ slidesPerView: "auto", zoom: true, grabCursor: true }}>

					{ slideContent.map((slide, index) => {

						return <OnboardingSlide key={ index } { ...slide } lastSlide={ lastSlide } sliderRef={ sliderRef } />;
					})}
				</IonSlides>

				<IonRow className="slide-buttons">
					{ !firstSlide &&
							<IonButton fill="clear" onClick={ () => sliderRef.current.slidePrev() }>
								<IonIcon icon={ arrowBack } />
							</IonButton>
					}

					{ !lastSlide &&
						<IonButton fill="clear" onClick={ () => sliderRef.current.slideNext() }>
							<IonIcon icon={ arrowForward } />
						</IonButton>
					}
				</IonRow>
			</IonContent>
		</IonPage>
	);
};

export default Home;
