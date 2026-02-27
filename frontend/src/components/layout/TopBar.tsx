import WebSerialConnectButton from '../upload/WebSerialConnectButton';
import FlashFirmwareButton from '../upload/FlashFirmwareButton';

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="logo">WebIDE</span>
      </div>
      <div className="topbar-center">
        {/* Project name / board selector */}
      </div>
      <div className="topbar-right">
        <WebSerialConnectButton />
        <FlashFirmwareButton />
      </div>
    </header>
  );
}
