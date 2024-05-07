import React from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

interface DialogProps {
  className?: string;
  year: string;
  title: string;
  img?: string | undefined;
  description: React.ReactNode;
}

const Dialog = ({ className, year, title, description, img }: DialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={className}>
        <div className="w-[50px] h-[50px] flex items-center justify-center text-normal text-[16px] text-center rounded-full transition-transform duration-500 bg-[#733627] hover:transform hover:scale-150">{year}</div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-normal text-[2rem]">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-normal text-[18px] flex flex-col gap-5">
            {description}
            <img className="rounded-lg" src={img} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-normal">Chiudi</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
