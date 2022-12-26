
export const Title = ({children, align = "center"}) => <h1 className={`text-4xl font-bold text-${align}`}>{children}</h1>
export const Subtitle = ({children, weight = "normal"}) => <h3 className={`text-2xl  font-${weight}`}>{children}</h3>

