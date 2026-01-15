import { motion } from 'framer-motion';
import { NodeData } from '@/lib/mockData';
import { Github, Linkedin, Twitter, Globe, X, Scan, Database, MapPin, Clock, Fingerprint } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ProfileCardProps {
  node: NodeData | null;
  onClose: () => void;
}

export function ProfileCard({ node, onClose }: ProfileCardProps) {
  if (!node) return null;

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      transition={{ type: 'tween', ease: 'circOut', duration: 0.3 }}
      className="fixed right-6 top-24 bottom-24 w-[380px] z-50 pointer-events-auto"
    >
      <div className="h-full bg-[#1a1c23]/95 backdrop-blur-xl border border-white/10 text-foreground shadow-2xl overflow-y-auto scrollbar-hide flex flex-col relative">
        {/* Tactical Corner Markers */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50 z-10" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50 z-10" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50 z-10" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50 z-10" />

        {/* Header */}
        <div className="p-4 border-b border-white/5 bg-white/[0.02] relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-2 right-2 hover:bg-white/5 text-muted-foreground hover:text-foreground rounded-none"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="flex gap-4 items-center">
             <div className="relative">
                <img
                  src={node.img}
                  alt={node.name}
                  className="w-16 h-16 grayscale opacity-80 border border-white/10"
                />
                <div className={`absolute -bottom-1 -right-1 w-2 h-2 ${node.exceptional ? 'bg-secondary' : 'bg-emerald-500'} border border-black`} />
             </div>
             <div>
                <div className="text-[10px] font-mono text-primary/70 mb-1 tracking-widest">ID: {node.id.toUpperCase()}</div>
                <h2 className="text-xl font-bold font-sans uppercase tracking-wide text-foreground">{node.name}</h2>
                <div className="text-xs font-mono text-muted-foreground">{node.role}</div>
             </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6 flex-1">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/[0.02] p-2 border border-white/5">
                <div className="text-[10px] text-muted-foreground uppercase font-mono mb-1">Clearance</div>
                <div className="text-sm font-bold text-foreground flex items-center gap-2">
                   <Shield /> {node.exceptional ? 'LEVEL 5' : 'LEVEL 1'}
                </div>
             </div>
             <div className="bg-white/[0.02] p-2 border border-white/5">
                <div className="text-[10px] text-muted-foreground uppercase font-mono mb-1">Sector</div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                   <MapPin className="w-3 h-3 text-primary" /> {node.location.split(' ')[0].toUpperCase()}
                </div>
             </div>
          </div>

          <Separator className="bg-white/5" />

          {/* Performance Index (Psychographics) */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
               <Database className="w-3 h-3" /> Performance Index
            </h3>
            
            <div className="space-y-3">
               <TechBar label="Innovation Cap" value={node.psychographic.innovationScore} />
               <TechBar label="Command Leadership" value={node.psychographic.leadershipPotential} />
               <TechBar label="Cognitive Flex" value={node.psychographic.openness} />
            </div>
          </div>

           {/* Skills Matrix */}
           <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
               <Fingerprint className="w-3 h-3" /> Competency Matrix
            </h3>
            <div className="flex flex-wrap gap-1">
              {node.skills.map((skill, i) => (
                <Badge key={i} variant="outline" className="rounded-none border-white/10 text-[10px] font-mono uppercase bg-transparent text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="bg-white/5" />

          {/* Comms Channels */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
               <Scan className="w-3 h-3" /> Secure Comms
            </h3>
            <div className="grid grid-cols-2 gap-2">
               <SocialBtn icon={Github} label="Repo" href={`https://${node.social.github}`} />
               <SocialBtn icon={Linkedin} label="Net" href={`https://${node.social.linkedin}`} />
               <SocialBtn icon={Twitter} label="Feed" href={`https://${node.social.twitter}`} />
               <SocialBtn icon={Globe} label="Link" href={`https://${node.social.website}`} />
            </div>
          </div>

        </div>
        
        {/* Footer */}
        <div className="p-2 border-t border-white/5 bg-[#16181d] text-[10px] font-mono text-center text-muted-foreground/50">
           // ENCRYPTED CONNECTION ESTABLISHED //
        </div>
      </div>
    </motion.div>
  );
}

function Shield() {
   return (
      <svg className="w-3 h-3 text-secondary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/></svg>
   )
}

function TechBar({ label, value }: { label: string, value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] font-mono uppercase">
        <span className="text-muted-foreground/70">{label}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="h-1 w-full bg-white/10 flex gap-0.5">
         {/* Segmented Bar */}
        {Array.from({ length: 20 }).map((_, i) => (
           <div 
             key={i} 
             className={`h-full flex-1 ${i < (value / 5) ? 'bg-primary/80' : 'bg-transparent'}`} 
           />
        ))}
      </div>
    </div>
  );
}

function SocialBtn({ icon: Icon, label, href }: { icon: any, label: string, href: string }) {
  return (
    <Button variant="outline" className="w-full justify-start gap-2 border-white/10 hover:bg-primary/5 hover:border-primary/20 hover:text-primary rounded-none h-8 text-xs font-mono uppercase text-muted-foreground" asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="w-3 h-3" />
        {label}
      </a>
    </Button>
  );
}
