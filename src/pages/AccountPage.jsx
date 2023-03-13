import React, { useEffect, useState } from 'react'
import AccountHeader from '../components/Account/AccountHeader'
import AccountPremium from '../components/Account/AccountPremium'
import AccountSelect from '../components/Account/AccountSelect'
import AccountSetting from '../components/Account/AccountSetting'

function AccountPage() {
	const user = {
		id: 1,
		logo: 'none',
		nickname: 'shumerman',
		name: 'ILIDENCHEECK',
		password: '12345',
		mail: 'shumerman_schmidt@gmаil.соm',
		id_social_account: false,
		premium_status: false,
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
	return (
		<div>
			<AccountHeader user={user} />
			<AccountSelect subMenu={subMenu} setSubMenu={setSubMenu} />
			<div className='text-white bg-main_content min-h-[464px] mb-[35px]'>
				{subMenu[0].active && <AccountSetting user={user} />}
				{subMenu[1].active && <AccountPremium user={user} />}
			</div>
		</div>
	)
}

export default AccountPage
