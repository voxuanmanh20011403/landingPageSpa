import { Button, Drawer, Layout, Menu, Select } from 'antd';
import image from '../../../assets/images/image.png';
import { useState } from 'react';
import classNames from 'classnames';
import { MenuOutlined } from '@ant-design/icons';
import './Styles.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import eng from '../../../assets/images/local/engl.png';
import kor from '../../../assets/images/local/kor.png';

const { Header } = Layout;
const { Option } = Select;
const headerStyle: React.CSSProperties = {
  display: 'flex',
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  background: ` url(${image}) no-repeat center/cover`,
};
const menu: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  width: '100%',
  background: ` url(${image}) no-repeat center/cover`,
};
const menuItems = [
  { key: '1', label: 'home', path: '/' },
  { key: '2', label: 'services', path: '/services' },
  { key: '4', label: 'priceList', path: '/price-list' },
  { key: '5', label: 'spaceAndRoom', path: '/space-and-room' },
  { key: '6', label: 'contact', path: '/contact' },
];

export default function HeaderComponent() {
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const handleLanguageChange = (value: string): void => {
    i18n.changeLanguage(value);
  };
  return (
    <>
      <Header style={headerStyle} className={classNames('header-component')}>
        <Menu
          className={classNames('laptop-menu')}
          style={menu}
          mode='horizontal'
          defaultSelectedKeys={['1']}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.path}>{t(item.label)}</Link>
            </Menu.Item>
          ))}
        </Menu>

        <Button
          className='mobile-menu-button'
          type='primary'
          icon={<MenuOutlined />}
          onClick={showDrawer}
          style={{ display: 'block' }}
        />

        <Select
          defaultValue={i18n.language}
          onChange={handleLanguageChange}
          className='language-select'
        >
          <Option value='en'>
            <img src={eng} style={{ paddingRight: '5px' }} />
            English
          </Option>
          <Option value='kor'>
            <img src={kor} style={{ paddingRight: '5px' }} />
            한국어
          </Option>
        </Select>

        <Drawer title='Menu' placement='left' onClose={onClose} visible={visible} closable={true}>
          <Menu mode='vertical' defaultSelectedKeys={['1']}>
            {menuItems.map((item) => (
              <Menu.Item key={item.key}>
                <Link to={item.path}>{t(item.label)}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
    </>
  );
}
