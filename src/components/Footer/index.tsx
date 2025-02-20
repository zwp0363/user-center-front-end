import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'zwp出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://docs.qq.com/doc/DUG93dVNHbVZjZXpo',
          blankTarget: true, // 默认打开新页面
        },
        {
          key: 'codeFather',
          title: '编程导航',
          href: 'https://www.codefather.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> zwp GitHub</>,
          href: 'https://github.com/zwp0363',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
