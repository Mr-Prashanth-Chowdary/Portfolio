export default function Footer() {
    const footerContent = {
        AvilableEmail: "CH.PRASHANTHCHOWDARY007@GMAIL.COM",
        objective: "",
        CreatedAt: "Ⓒ 2026"
    }
  return (
    <div className="absolute bottom-4 left-4 right-4 text-sm flex justify-between items-end">
        <div className="text-[.7rem] [word-spacing:.7rem]">
            <p>AVAILABLE FOR FREELANCE</p>
            <p>{footerContent.AvilableEmail}</p>
        </div>
        <div className="text-[.7rem]">
            <p>{`[ ${footerContent.CreatedAt} ]`}</p>
        </div>
    </div>
  )
}
