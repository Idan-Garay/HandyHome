export default function Button({ children, className, isPrimary = true, Link }) {
    // console.log(`Link: ${Link}`);
    const primaryStyle = "btn primary";
    const secondaryStyle = "btn secondary";
    return <button className={isPrimary? primaryStyle: secondaryStyle}>
        {children}
    </button>
}