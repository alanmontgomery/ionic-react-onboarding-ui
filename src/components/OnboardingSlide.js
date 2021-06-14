import { IonSlide, IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import "../pages/Home.css";

const OnboardingSlide = ({ image, mainSlide = false, finalSlide = false, title, text, lastSlide, sliderRef }) => {

	return (
		<IonSlide>
			<IonGrid className="ion-justify-content-center ion-align-items-center ion-align-self-center">

				<IonRow className="slide-content-container">
					<IonCol size="10" className="slide-content">
						<img src={ image } className={ mainSlide && "slide-main-image" } />
						<h1>{ title }</h1>
						<p>{ text }</p>

						{ mainSlide && 
							
							<IonButton expand="block" fill="outline" onClick={ () => sliderRef.current.slideNext() }>Get started &rarr;</IonButton>
						}

						{ finalSlide &&
							<>
								<IonButton expand="block" fill="solid">Register</IonButton>
								<IonButton expand="block" fill="outline">Login</IonButton>
							</>
						}
					</IonCol>
				</IonRow>
			</IonGrid>
		</IonSlide>
	);
}

export default OnboardingSlide;