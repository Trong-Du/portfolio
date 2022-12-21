export interface AnchorProps {
    href?: string;
    className?: string;
    rel?: string;
    target?: React.HTMLAttributeAnchorTarget;
    children: React.ReactNode;
}

export function Anchor(props: AnchorProps) {
    const { href, target, rel, children, className } = props;
    return (<a
        href={href}
        target={target}
        rel={rel}
        className={className}
    >
        {children}
    </a>)
};