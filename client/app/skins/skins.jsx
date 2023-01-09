
export function MenuListItemSkin(props) {
    return <li className={`p-2 pr-5 sm:ml-5 pl-5 hover:bg-primaryColor cursor-pointer hover:text-secondaryColor sm:mx-4 sm:py-7 ${props.otherCssClasses}`}>{props.children}</li>
}
