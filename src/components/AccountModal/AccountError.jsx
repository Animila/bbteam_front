import React from 'react'

function AccountError() {
	return (
		<div>
			<h3 className='text-center text-[27px] text-[#FF5656]'>ОШИБКА!</h3>
			<p className='text-center text-[17px] text-[#797979] mt-[26px] px-[38px]'>
				Данный промокод является недействительным, пожалуйста, проверьте ещё раз
				правильность и попробуйте ещё раз. Если проблема остаётся прежней, то
				напиши нам в <span className='text-main_action'>лс группы</span> либо в{' '}
				<span className='text-main_action'>лс телегамм</span> для замены.
			</p>
		</div>
	)
}

export default AccountError
