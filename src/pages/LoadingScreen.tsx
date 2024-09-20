import { useProgress } from '@react-three/drei'


export function LoadingScreen() {
    const { active, progress } = useProgress()

    return active ? (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black flex justify-center items-center text-white text-2xl">
            <span>
                {Math.floor(progress)}%
            </span>
        </div>
    ) : null
}