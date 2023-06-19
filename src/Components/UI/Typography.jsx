import clsx from "clsx"

const TypographyH1 = ({className, children}) => {
  return (
    <h1 className={clsx('font-medium leading-[8.7rem] text-[7.40354rem] -tracking-[.2rem]', className)}>{children}</h1>
  )
}

const TypographyH2 = ({className, children}) => {
  return (
    <h2 className={clsx('font-bold leading-[7rem] text-[6.6rem] -tracking-[-0.01em]', className)}>{children}</h2>
  )
}

const TypographyH3 = ({className, children}) => {
  return (
    <h3 className={clsx('font-bold leading-[6rem] text-[5.8rem] -tracking-[-0.0055em]', className)}>{children}</h3>
  )
}

const TypographyBlogH1 = ({className, children}) => {
  return (
    <h1 className={clsx('font-semibold leading-[7.834rem] text-[7.531rem] -tracking-[-1%]', className)}>{children}</h1>
  )
}

const TypographyBlogH2 = ({className, children}) => {
  return (
    <h2 className={clsx('font-bold leading-[5.498rem] text-[5.098rem] -tracking-[-0.0055em]', className)}>{children}</h2>
  )
}

const TypographyP = ({className, children}) => {
  return (
    <p className={clsx('font-normal leading-[3rem] text-[2.9rem] md:text-[2.6rem] -tracking-[-0.02em]', className)}>{children}</p>
  )
}

const TypographyBlogP = ({className, children}) => {
  return (
    <p className={clsx('font-normal leading-[5.498rem] text-[5.098rem]', className)}>{children}</p>
  )
}

export {TypographyH1, TypographyH2, TypographyH3, TypographyBlogH1, TypographyBlogH2, TypographyP, TypographyBlogP}