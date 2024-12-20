import '@/app/globals.css';
import './styles.css';
import Image from 'next/image';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <footer className='bg-periwinkle text-white h-fit pt-3 pb-1'>

            <div className='fixed right-32 sm:right-36 -bottom-1 md:bottom-7 flex justify-center p-2 rounded-full cursor-pointer z-50 max-md:scale-[0.85]'>
            <Link href='/ai'>
                <Image
                    src='/images/logo/ai.png'
                    alt='AI Assistant'
                    height={100}
                    width={100}
                    className='w-16 h-auto'
                />
            </Link>
            </div>
            
            <div className='float-whatsapp-icon fixed right-5 sm:right-6 bottom-4 md:bottom-12 flex justify-center border-box p-2 scale-125 md:scale-150 rounded-full cursor-pointer z-50'>
            <Link href={'https://wa.me/' + process.env.WHATSAPP + '?text=Hi%20there%2C%20I%20am%20looking%20for%20tour%20packages%2Fcab%20services.%0Ahttps%3A%2F%2Fwww.vanshikatour.in%2F'} target='_blank'><WhatsAppIcon/></Link>
            </div>

            <div className='float-calling-icon fixed right-20 sm:right-24 bottom-4 md:bottom-12 flex justify-center p-2 scale-125 md:scale-150 rounded-full cursor-pointer z-50'>
            <Link href={'tel:' + process.env.PHONE} target='_blank'><CallIcon fontSize='medium'/></Link>
            </div>
            

            <div className='grid grid-cols-1 tablet:grid-cols-3 sm:grid-cols-10 md:grid-cols-5 mx-8 lg:mx-12'>

                {/* Contact Section */}
                <div className='mb-6 tablet:mb-4 sm:mb-0 tablet:col-span-2 sm:col-span-5 md:col-span-2'>
                    <h2 className='font-medium mb-4 relative underline-half'>CONTACT</h2>
                    <div className='flex flex-col'>
                        <div className='flex mb-1'>
                            <LocationOnIcon/>
                            <div className='ml-4'>
                                <div className='text-sm font-semibold'>Vanshika Tour & Travels</div>
                                <div className='text-xs'>S-26/42 K.C. Plot No-67 <br/> Ashok Puram Colony, <br/> Meerapur Basahi,<br/> Cantt, Varanasi<br/> Uttar Pradesh - 221002</div>
                            </div>
                        </div>

                        <div className='flex mb-1'>
                            <PhoneAndroidIcon/>
                            <Link href={'tel:' + process.env.PHONE} target='_blank'>
                                <span className='ml-4 text-sm'>{process.env.PHONE}</span>
                            </Link>
                        </div>

                        <div className='flex'>
                            <MailIcon/>
                            <Link href={'mailto:' + process.env.EMAILID} target='_blank'>
                                <div className='ml-4 text-sm'> {process.env.EMAILID} </div>
                            </Link>
                        </div>
                            
                    </div>
                </div>


                {/* Quick Links Section */}
                <div className='mb-6 tablet:mb-4 sm:mb-0 sm:col-span-3 md:col-span-2'>
                    <h2 className='font-medium mb-4 relative underline-half'>QUICK LINKS</h2>
                    <div className='flex flex-col'>
                        <div><Link className='hover:text-yellow-gold' href='/about'>About</Link></div>
                        <div><Link className='hover:text-yellow-gold' href='/contact-us'>Get in Touch</Link></div>
                    </div>
                </div>


                {/* Follow Us Section */}
                <div className='mb-4 sm:mb-0 sm:col-span-2 md:col-span-1'>
                    <div className='flex sm:flex-col'>

                    <div className='sm:mb-8 mr-12'>
                        <h2 className='font-medium mb-4 relative underline-half'>FOLLOW US:</h2>
                        <div className='flex flex-row items-center'>
                            <Link className='mr-1' href='https://www.facebook.com/profile.php?id=61566433152535' target='_blank'><FacebookIcon/></Link>
                            <InstagramIcon className='mr-1'/>
                            <YouTubeIcon/>
                        </div>
                    </div>

                    {/* <div>
                        <h2 className='font-medium mb-4 relative underline-half'>SCAN TO VISIT</h2>
                        <Image 
                        src='/images/qr-code.png' 
                        alt='QR Code for our website'
                        height={50}
                        width={50}
                        priority={true}
                        className=''
                        />
                    </div> */}

                    </div>
                </div>

            </div>  

            <div className='border-t mt-2 mx-5 tablet:mx-10'></div>

            {/* Footer Bottom */}
            <div>
                <h3 className='text-center text-xs sm:text-sm'>&copy;  2016-{ new Date().getFullYear()} All rights reserved | Vanshika Tour & Travels</h3>
            </div>

        </footer>
        
    );
}