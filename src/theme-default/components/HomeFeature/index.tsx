import styles from './index.module.scss';
import { Feature } from 'shared/types';

const PRESET_COUNT = [2, 3, 4];

const getGridClass = (count?: number): string => {
  if (!count) {
    return '';
  } else if (PRESET_COUNT.includes(count)) {
    return `grid${12 / count}`;
  } else if (count % 3 === 0) {
    return 'grid4';
  } else if (count % 2 === 0) {
    return 'grid6';
  }
  return '';
};

export function HomeFeature({ features }: { features: Feature[] }) {
  const gridClass = getGridClass(features?.length);

  return (
    <div className="max-w-1152px" m="auto" flex="~ wrap" justify="between">
      {features?.map((feature) => {
        const { icon, title, details } = feature;
        return (
          <div
            key={title}
            border="rounded-md"
            p="r-4 b-4"
            className={`${gridClass ? styles[gridClass] : 'w-full'}`}
          >
            <article
              key={title}
              bg="bg-soft"
              border="~ bg-soft solid rounded-xl"
              className="p-6 h-full "
            >
              <div
                bg="gray-light-4 dark:bg-white"
                border="rounded-md"
                className="mb-5 w-12 w-12 h-12 text-3xl flex-center"
              >
                {icon}
              </div>
              <h2 font="bold">{title}</h2>
              <p text="sm text-2" font="medium" className="pt-2 leading-6">
                {details}
              </p>
            </article>
          </div>
        );
      })}
    </div>
  );
}