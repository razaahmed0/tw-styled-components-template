import tw, { styled } from "twin.macro";

const Container = styled.div(({ hasBg }) => [
	tw`flex w-full`, // Add base styles first
	hasBg && tw`bg-black`, // Then add conditional styles
]);
const Column = tw.div`w-1/2`;

export default function App() {
	const hasBg = false;
	return (
		<Container {...{ hasBg }}>
			<Column>
				<h1 tw="text-4xl">Hello</h1>
			</Column>
			<Column>
				<h1 tw="text-4xl">World</h1>
			</Column>
		</Container>
	);
}
