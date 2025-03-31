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
          href: 'https://www.yuque.com/dashboard/books',
          blankTarget: true, // 默认打开新页面
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> zwp GitHub
            </>
          ),
          href: 'https://github.com/zwp0363',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
