import clsx from "clsx"

const TypographyH1 = ({className, children}) => {
  return (
    <h1 className={clsx('font-medium leading-[80px] text-[74.0354px] -tracking-[-1.59121px]', className)}>{children}</h1>
  )
}

const TypographyH2 = ({className, children}) => {
  return (
    <h2 className={clsx('font-bold leading-[70px] text-[66px] -tracking-[-0.01em]', className)}>{children}</h2>
  )
}

const TypographyH3 = ({className, children}) => {
  return (
    <h3 className={clsx('font-bold leading-[60px] text-[58px] -tracking-[-0.0055em]', className)}>{children}</h3>
  )
}

const TypographyP = ({className, children}) => {
  return (
    <p className={clsx('font-normal leading-[30px] text-[26px] -tracking-[-0.02em]', className)}>{children}</p>
  )
}

export {TypographyH1, TypographyH2, TypographyH3, TypographyP}