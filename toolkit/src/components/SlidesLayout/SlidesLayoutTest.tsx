import SlidesLayout from "./SlidesLayout";

export const SlidesLayoutTest = () => {

    return (
        <SlidesLayout scrollSnap={true}>
            <SlidesLayout.Slide>
                Test Slide 1
            </SlidesLayout.Slide>
            <SlidesLayout.Slide>
                Test Slide 2
            </SlidesLayout.Slide>
        </SlidesLayout>
    );
}