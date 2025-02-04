import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    const renderFooter = () => {
        return (
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© eMedic. Alle rettigheter reservert.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Vilkår for bruk
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Personvern
                    </Link>
                </nav>
                <p className="text-xs text-gray-500 dark:text-gray-400">Kontakt oss: kontakt@emedic.no |</p>
            </footer>
        );
    };

    return renderFooter();
};

export default Footer;
