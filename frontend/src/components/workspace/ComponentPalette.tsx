// Drag sources for MCUs, sensors, LEDs, resistors, etc.
const COMPONENTS = [
  { type: 'arduino-uno', label: 'Arduino Uno' },
  { type: 'esp32', label: 'ESP32' },
  { type: 'led', label: 'LED' },
  { type: 'resistor', label: 'Resistor' },
  { type: 'push-button', label: 'Push Button' },
  { type: 'dht11', label: 'DHT11 Sensor' },
];

export default function ComponentPalette() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="component-palette">
      <h3>Components</h3>
      {COMPONENTS.map((comp) => (
        <div
          key={comp.type}
          className="palette-item"
          draggable
          onDragStart={(e) => onDragStart(e, comp.type)}
        >
          {comp.label}
        </div>
      ))}
    </div>
  );
}
