import FancyLayout from '@/Layouts/FancyLayout';
import { PageProps } from '@/types';
import { WhenVisible } from '@inertiajs/react';
import { FaTwitter } from 'react-icons/fa';
import { Tweet } from 'react-tweet';

type TweetsProps = {
    tweets: { tweet_id: string }[];
    meta: {
        current_page: number;
        last_page: number;
        total: number;
    };
};

function LoadingTweets() {
    return (
        <div className="flex w-full justify-center">
            <FaTwitter
                size={48}
                className="motion-preset-oscillate-lg text-neon-carrot-500"
            />
        </div>
    );
}

export default function Tweets({ tweets, meta }: PageProps<TweetsProps>) {
    return (
        <FancyLayout>
            <h1 className="mb-6 text-center text-6xl font-extrabold">
                <span className="text-neon-carrot-500">Tweets</span> I'm happy
                with
            </h1>
            <p className="mb-12 text-center text-xl text-gray-600">
                My Posts I think speak best for me 🥵
            </p>

            <div className="flex flex-col">
                {tweets.map((tweet) => (
                    <div key={tweet.tweet_id} className="flex justify-center">
                        <Tweet id={tweet.tweet_id} />
                    </div>
                ))}

                {meta.current_page < meta.last_page && (
                    <WhenVisible
                        fallback={<LoadingTweets />}
                        always
                        params={{
                            data: { page: meta.current_page + 1 },
                            preserveUrl: true,
                            only: ['tweets', 'meta'],
                        }}
                        buffer={400}
                    >
                        <LoadingTweets />
                    </WhenVisible>
                )}
            </div>
        </FancyLayout>
    );
}
