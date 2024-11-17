import '@/app/globals.css';
import Link from 'next/link';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function ContactDetails() {
    return (
        <div className="container min-w-full max-sm:hidden flex items-center text-white h-12 text-xs font-bold tablet:text-sm lg:text-base">
        <div className='flex items-center w-full h-full space-x-2 sm:space-x-4 ml-2 sm:ml-8 md:ml-16'>
            <div className='flex items-center space-x-1'>
                <MailIcon/>
                <Link href={'mailto:' + process.env.EMAILID} target='_blank'>
                    <p>{process.env.EMAILID}</p>
                </Link>
            </div>
            <div className='flex items-center space-x-1'>
                <PhoneAndroidIcon/>
                <Link href={'tel:' + process.env.PHONE} target='_blank'>
                    <span>{process.env.PHONE}</span>
                </Link>
            </div>
        </div>
        </div>
    );
}