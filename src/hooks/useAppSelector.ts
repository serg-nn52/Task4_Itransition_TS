import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'store/type';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
