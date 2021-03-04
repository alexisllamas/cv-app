import { FunctionComponent, cloneElement } from 'react';
import cx from 'classnames';
import BaseLink, { LinkProps as BaseLinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps extends BaseLinkProps {
  children: JSX.Element;
  activeClass?: string;
}

const Link: FunctionComponent<LinkProps> = ({
  href,
  children,
  activeClass = 'active',
}) => {
  const router = useRouter();

  return (
    <BaseLink href={href}>
      {cloneElement(children, {
        className: cx(children.props.className, {
          [activeClass]: router.pathname === href,
        }),
      })}
    </BaseLink>
  );
};

export default Link;
