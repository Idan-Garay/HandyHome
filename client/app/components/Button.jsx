export default function Button({ children, isPrimary = true, Link }) {
    console.log(`Link: ${Link}`);
    const primaryStyle = "bg-primaryColor cursor-pointer text-secondaryColor rounded-md py-1 px-3 mr-2";
    const secondaryStyle = "bg-secondaryColor cursor-pointer text-primaryColor rounded-md py-1 px-3 mr-2";
    return <button className={isPrimary? primaryStyle: secondaryStyle}>
        {children}
    </button>
}