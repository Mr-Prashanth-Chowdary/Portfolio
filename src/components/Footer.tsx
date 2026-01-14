export default function Footer() {
    const footerContent = {
        AvilableEmail: "CH.PRASHANTHCHOWDARY007@GMAIL.COM",
        objective: "",
        CreatedAt: "Ⓒ 2026"
    }
  return (
    <div className="mt-10 flex justify-between items-end">
        <div className="text-nano [word-spacing:.7rem]">
            <p>AVAILABLE FOR FREELANCE</p>
            <p>{footerContent.AvilableEmail}</p>
        </div>
        <div className="text-nano">
            <p>{`[ ${footerContent.CreatedAt} ]`}</p>
        </div>
    </div>
  )
}
