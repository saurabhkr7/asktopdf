import React from 'react';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
} from '@carbon/react';
import { Notification, UserAvatar } from '@carbon/react/icons';

const TutorialHeader = () => (
    <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <Header aria-label="Ask To Pdf">
                <SkipToContent />
                <HeaderMenuButton
                    aria-label="Open menu"
                    onClick={onClickSideNavExpand}
                    isActive={isSideNavExpanded}
                />
                <HeaderName href="/" prefix="">
                    Ask To PDF
                </HeaderName>
                <HeaderNavigation aria-label="Ask To Pdf">
                    <HeaderMenuItem href="/page">Pages</HeaderMenuItem>
                </HeaderNavigation>
                <SideNav
                    aria-label="Side navigation"
                    expanded={isSideNavExpanded}
                    isPersistent={false}
                >
                    <SideNavItems>
                        <HeaderSideNavItems>
                            <HeaderMenuItem href="/page">Pages</HeaderMenuItem>
                        </HeaderSideNavItems>
                    </SideNavItems>
                </SideNav>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center">
                        <Notification size={20} />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
                        <UserAvatar size={20} />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        )}
    />
);

export default TutorialHeader;