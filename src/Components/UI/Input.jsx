const Input = ({ value, onChange, placeholder, error }) => {
  return (
    <>
      <input
        onChange={onChange}
        value={value}
        className={`!outline-none text-[2.3873rem] border ${
          error ? 'border-arkiterRed-400' : 'border-white/[0.10]'
        } py-[2.135rem] px-[3.133rem] ${
          error ? 'mb-[1rem]' : 'mb-[2.238rem]'
        } w-full rounded-md bg-[#FFFFFF0F] placeholder-white/[0.5] text-white`}
        placeholder={placeholder}
      />
      {error && (
        <p className='w-full text-left mb-[2.238rem] text-[2.3873rem] font-normal text-arkiterRed-400'>
          {error}
        </p>
      )}
    </>
  )
}

export default Input
