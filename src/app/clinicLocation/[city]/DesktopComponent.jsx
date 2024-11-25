
import { Container } from '@mui/material';
import DoctorCarousel from './DoctorCarousel';
import AppointmentForm from './AppointmentForm';
import ImageGallary from './ImageGallary';
import ImageCarousel from './ImageCarousel';
import RequestAppointment from './RequestAppointment';
import ClinicAddress from './ClinicAddress';
import OurDoctorSection from './OurDoctorSection';
import ClinicLocationDoctors from '@/app/component/ClinicLocationDoctors';
const DesktopComponent = ({ images, data, city }) => {
    return (
        <>
            <div className="bg-primary-div md:p-5 select-none mb-8">
                <Container maxWidth="lg" className="py-[65px]">
                    <div className="mx-auto md:p-4">
                        <h1 className="text-[28px] md:text-4xl font-bold text-center text-primary-orange">
                            {data?.addressTitle}
                        </h1>
                    </div>
                </Container>
             
            </div>

            <Container maxWidth="lg" className="py-5">
                <div className='grid md:grid-cols-5 gap-12 '>
                    <div id='photo-gallery' className="col-span-3">
                        <ImageCarousel images={images} />
                    </div>
                    <div id='clinic-location' className="mb-10 col-span-2">
                        {/* clinic location here */}
                        <div className='mb-8'>
                            <RequestAppointment city={city} />
                        </div>
                        <div>
                            <ClinicAddress images={images} data={data} />
                        </div>
                    </div>
                </div>

                <div>
                <ClinicLocationDoctors city={city}/>
                </div>


            </Container>
        </>
    )
}

export default DesktopComponent