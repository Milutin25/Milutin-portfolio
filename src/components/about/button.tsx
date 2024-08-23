import { FC  } from "react";

export const DownloadButton: FC = () => {
    const handleDownload = () => {
        const pdfUrl = '/resume.pdf'
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <button id='resumeButton' onClick={handleDownload}>Download Resume</button>
    )
}