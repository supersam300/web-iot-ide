import TopBar from '../components/layout/TopBar';
import SideBar from '../components/layout/SideBar';
import SplitPane from '../components/layout/SplitPane';
import StatusBar from '../components/layout/StatusBar';
import WorkspaceCanvas from '../components/workspace/WorkspaceCanvas';
import CodeEditor from '../components/editor/CodeEditor';

export default function WorkspacePage() {
  return (
    <div className="workspace-page">
      <TopBar />
      <div className="workspace-body">
        <SideBar />
        <SplitPane
          left={<WorkspaceCanvas />}
          right={<CodeEditor />}
        />
      </div>
      <StatusBar />
    </div>
  );
}
