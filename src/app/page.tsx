import { AceternityCard } from '@/components/aceternity-card';
import { AnimatedBox } from '@/components/animated-box';
import { AnimatedTextPage } from '@/components/animated-text';
import { ColorChangingBox } from '@/components/color-changing-box';
import { Dashboard } from '@/components/dashboard';
import { DynamicVariants } from '@/components/dynamic-variants';
import { GestureAnimations } from '@/components/gesture-animations';
import { HoverButton } from '@/components/hover-button';
import { MultiImageInput } from '@/components/multi-image-input';
import { ToggleBtn } from '@/components/toggle-btn';
import { WildcardKeyframe } from '@/components/wildcard-keyframe';

export default function Home() {
    return (
        <div className="min-h-screen">
            <HoverButton />
            <AceternityCard />
            <Dashboard />
            <AnimatedTextPage />
            <AnimatedBox />
            <ColorChangingBox />
            <WildcardKeyframe />
            <GestureAnimations />
            <DynamicVariants />
            <ToggleBtn />
            <MultiImageInput />
        </div>
    );
}
