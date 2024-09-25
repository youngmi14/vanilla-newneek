'use client';

import { useState } from 'react';
import Link from 'next/link';
import Search from '@/public/svg/Search';
import Bell from '@/public/svg/Bell';
import NewneekLogo from '@/public/svg/NewneekLogo';
import Hamburger from '@/public/svg/Hamburger';
import { root } from '@/styles/globalTheme.css';
import * as styles from './Header.css';

export default function Header() {

  const [activeMenu, setActiveMenu] = useState<number>(0);

  const menuItems = [
    { name: '홈', link: '/' },
    { name: '시리즈', link: '/series' },
    { name: '그라운드', link: '/grounds' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navWrap}>
        <ul className={styles.navMenuLg}>
          <li><NewneekLogo width={'142'} height={'1.75rem'} /></li>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.link}
                className={activeMenu === idx ? styles.liSelected : styles.li }
                onClick={() => setActiveMenu(idx)}
              >{item.name}</Link>
            </li>
          ))}
          <li><a
            href='https://iamnewneeker.co/'
            target='_blank'
            rel='nopener'
            className={styles.li}
          >아엠뉴</a></li>
        </ul>
        <ul className={styles.navMenuMd}>
          <li data-roll="button"><Hamburger /></li>
          <li>
            <Link href="/">
              <NewneekLogo width={'111'} height={'1.5rem'} />
            </Link>
          </li>
        </ul>
        <ul className={styles.navUser}>
          <li><Search color={root.color.grayscale.gray_600} /></li>
          <li><Bell color={root.color.grayscale.gray_600} /></li>
          <li>
            <button className={styles.loginBtn}>로그인</button>
          </li>
        </ul>
      </div>
    </header>
  )
}
