import React from 'react';

const Sidebar = () => {
    const containerStyle = {
        position: 'absolute',
        top: '0px',
        left: '-7px',
        width: '252px',
        height: '1175px',
        background: '#FFFFFFFF',
        borderRadius: '0px',
        boxShadow: '0px 0px 1.5px #171a1f, 0px 0px 2px #171a1f',
    };

    const sidebarMenuStyle = {
        position: 'absolute',
        top: '100px',
        left: '16px',
        width: '220px',
        height: '248px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Mulish',
        fontSize: '14px',
        lineHeight: '22px',
        opacity: '1',
        gap: '12px',
    };

    const sidebarMenuItemStyle = {
        padding: '16px NaNpx',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        color: '#565E6CFF',
        background: '#000000FF',
        borderRadius: '6px',
        gap: '8px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
    };

    const selectedSidebarMenuItemStyle = {
        position: 'relative',
        fontWeight: 'bold',
        color: '#B1171AFF',
        // background: '#F9CECFFF',
        background: "#117b34"
    };

    const indentSidebarMenuItemStyle = {
        paddingLeft: '31px',
    };

    const avatarStyle = {
        position: 'absolute',
        top: '1083px',
        left: '16px',
        width: '36px',
        height: '36px',
        background: '#C5D0F5FF',
        opacity: '1',
        overflow: 'hidden',
        borderRadius: '18px',
    };

    const avatarImgStyle = {
        width: '36px',
        height: '36px',
    };

    const avatarBadgeStyle = {
        width: '9px',
        height: '9px',
        borderRadius: '4.5px',
    };

    const activeAvatarBadgeStyle = {
        background: '#000000FF',
        opacity: '0',
        borderWidth: '1.5px',
        borderColor: '#FFFFFFFF',
    };

    const inactiveAvatarBadgeStyle = {
        background: '#000000FF',
        opacity: '0',
        borderWidth: '1.5px',
        borderColor: '#FFFFFFFF',
    };

    const idleAvatarBadgeStyle = {
        background: '#000000FF',
        opacity: '0',
        borderWidth: '1.5px',
        borderColor: '#FFFFFFFF',
    };

    const doNotDisturbAvatarBadgeStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '9px',
        lineHeight: '9px',
        color: '#FFFFFFFF',
        background: '#000000FF',
        opacity: '0',
        borderWidth: '1.5px',
        borderColor: '#FFFFFFFF',
    };

    return (
        <div style={containerStyle} className="container">
            {/* Sidebar Menu */}
            <div style={sidebarMenuStyle} className="sidebar-menu">
                {/* Sidebar Menu Item */}
                <div style={sidebarMenuItemStyle} className="sidebar-menu-item">
                    {/* Icon */}
                    <svg className="icon" style={{ width: '24px', height: '24px', fill: 'currentColor' }}></svg>
                    Item 1
                </div>
                {/* Sidebar Menu Item Indent */}
                <div style={{ ...sidebarMenuItemStyle, ...indentSidebarMenuItemStyle }} className="sidebar-menu-item indent">
                    {/* Icon */}
                    <svg className="icon" style={{ width: '24px', height: '24px', fill: 'currentColor' }}></svg>
                    Item 2
                </div>
                {/* Selected Sidebar Menu Item */}
                <div style={{ ...sidebarMenuItemStyle, ...selectedSidebarMenuItemStyle }} className="sidebar-menu-item selected">
                    {/* Icon */}
                    <svg className="icon" style={{ width: '24px', height: '24px', fill: 'currentColor' }}></svg>
                    Selected Item
                </div>
            </div>

            {/* Avatar */}
            <div style={avatarStyle} className="avatar">
                <img src="avatar.jpg" alt="Avatar" style={avatarImgStyle} />
                <div style={avatarBadgeStyle} className="badge"></div>
            </div>
        </div>
    );
};

export default Sidebar;
