import React, { useEffect, useState } from 'react'
import AccountHeader from '../components/Account/AccountHeader'
import AccountModal from '../components/AccountModal/AccountModal'
import AccountPremium from '../components/Account/AccountPremium'
import AccountSelect from '../components/Account/AccountSelect'
import AccountSetting from '../components/Account/AccountSetting'

const AccountPage = () => {
	const user = {
		id: 1,
		logo: './images/avatar.png',
		nickname: 'shumerman',
		name: 'ILIDENCHEECK',
		password: '12345',
		mail: 'shumerman_schmidt@gmаil.соm',
		id_social_account: false,
		premium_status: true,
	}
	const [subMenu, setSubMenu] = useState([
		{
			title: 'Настройки',
			active: true,
		},
		{
			title: 'Премиум',
			active: false,
		},
	])
	const [activeModal, setActiveModal] = useState(false)
	const [success, setSuccess] = useState(false)

	const handlerModal = () => {
		setActiveModal(!activeModal)
	}

	return (
		<div>
			{activeModal && (
				<AccountModal handlerModal={handlerModal} success={success} />
			)}
			<AccountHeader user={user} />
			<AccountSelect subMenu={subMenu} setSubMenu={setSubMenu} />
			<div className='text-white bg-main_content min-h-[464px] mb-[35px]'>
				{subMenu[0].active && (
					<AccountSetting
						user={user}
						handlerModal={handlerModal}
						setSuccess={setSuccess}
					/>
				)}
				{subMenu[1].active && (
					<AccountPremium
						user={user}
						handlerModal={handlerModal}
						setSuccess={setSuccess}
					/>
				)}
			</div>
		</div>
	)
}

export default AccountPage
