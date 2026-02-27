import WebSerialStatus from '../upload/WebSerialStatus';

export default function StatusBar() {
  return (
    <footer className="statusbar">
      <WebSerialStatus />
      <span className="statusbar-info">{/* Board, port, compile status */}</span>
    </footer>
  );
}
