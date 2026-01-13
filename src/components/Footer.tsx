export default function Footer() {
    const footerContent = {
        AvilableEmail: "CH.PRASHANTHCHOWDARY007@GMAIL.COM",
        objective: "",
        CreatedAt: "Ⓒ 2026"
    }
  return (
    <div className="lg:absolute left-4 right-4 bottom-4 mt-8 text-sm flex justify-between items-end">
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
