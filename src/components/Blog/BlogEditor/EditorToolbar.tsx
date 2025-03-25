import React from 'react';
import { Bold, Italic, Link, Image, List, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { ToolbarButton } from './ToolbarButton';

export function EditorToolbar() {
  return (
    <div className="flex flex-wrap gap-2 p-2 bg-dark-700 rounded-lg">
      <ToolbarButton icon={<Bold size={18} />} tooltip="Bold" />
      <ToolbarButton icon={<Italic size={18} />} tooltip="Italic" />
      <ToolbarButton icon={<Link size={18} />} tooltip="Insert Link" />
      <ToolbarButton icon={<Image size={18} />} tooltip="Insert Image" />
      <ToolbarButton icon={<List size={18} />} tooltip="Bullet List" />
      <ToolbarButton icon={<AlignLeft size={18} />} tooltip="Align Left" />
      <ToolbarButton icon={<AlignCenter size={18} />} tooltip="Align Center" />
      <ToolbarButton icon={<AlignRight size={18} />} tooltip="Align Right" />
    </div>
  );
}